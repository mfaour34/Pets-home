import M from 'materialize-css'
import React from 'react'

// export const createPost = (post, props) => {
//     return (dispatch, getState, { getFirestore, getFirebase }) => {
//         const firebase = getFirebase();
//         const firestore = getFirestore();

//         const profile = getState().firebase.profile;
//         const id = getState().firebase.auth.uid;
//         firestore.collection('posts').add({
//             title: post.title,
//             description: post.description,
//             authorFirstName: profile.firstName,
//             authorLastName: profile.lastName,
//             authId: id,
//             createdAt: new Date(),
//             phone: post.phone,
//             email: profile.email
//         }).then(docRef => {
//             let docId = docRef.id;
//             console.log(docId);
//             const storage = firebase.storage();
//             let extension = check(post.image.name);
//             let image = docId;
//             console.log(image)
//             const upload = storage.ref(`/post_pics/${image}`)
//                 .put(post.image)
//             upload.on('state_changed',
//                 (snapshot) => {
//                     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                     createToast(progress, props);
//                     dispatch({ type: 'POST_CREATED' })
//                 }, (err) => {
//                     console.log(err);
//                 }, () => {
//                     console.log('done image upload');
//                 }
//             )


//         }).catch(err => {
//             console.log(err);
//             dispatch({ type: 'POST_ERROR', err })
//         })
//     }
// }

export const createPost = (post, props) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const storage = firebase.storage();
        const profile = getState().firebase.profile;
        const id = getState().firebase.auth.uid;
        let image = post.image.name + id + '' + Math.random();
        const upload = storage.ref(`/post_pics/${image}`)
            .put(post.image);
        upload.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                createToast(progress, props);

            }, (err) => {
                console.log(err);
            }, () => {
                console.log('done image upload');
                storage.ref('post_pics').child(image).getDownloadURL()
                    .then(fireBaseUrl => {
                        console.log(fireBaseUrl);
                        firestore.collection('posts').add({
                            title: post.title,
                            description: post.description,
                            authorFirstName: profile.firstName,
                            authorLastName: profile.lastName,
                            authId: id,
                            createdAt: new Date(),
                            phone: post.phone,
                            email: profile.email,
                            url:fireBaseUrl,
                            image_name:image
                        }).then(()=>{
                            dispatch({type:'POST_CREATED'})
                        }).catch(err=>{
                            dispatch({type:'POST_ERROR',err})
                        })
                    })
            }
        )
    }
}



export const getImage = (id) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();

        firebase.storage().ref('post_pics').child(id).getDownloadURL()
            .then(url => {
                console.log(id)
                dispatch({ type: 'IMAGE_FETCH', url })
            }).catch(err => {
                console.error(err)
            })
    }
}

const check = (name) => {
    let temp = '';
    let state = false;
    for (var i = 0; i < name.length; i++) {
        if (name[i] === '.' || state) {
            state = true;
            temp = temp + name[i]
        }
    }
    return temp;
}

const createToast = (progress, props) => {
    if (progress === 100) {
        M.toast({ html: 'Image Uploaded!!' });
        props.history.push('/');
    }
    else {
        M.toast({ html: `Uploading image, progress: ${progress}%` })
    }
}

export const getPost = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firestore.collection('posts').doc(id).get()
            .then(doc => {
                dispatch({ type: 'GET_POST', doc: doc.data() })
            }).catch(err => {
                dispatch({ type: 'GET_POST_ERROR', err })
            })
    }
}

export const deletePost = (id,name) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firestore.collection('posts').doc(id).delete()
            .then(() => {
                console.log('Document Deleted')
                firebase.storage().ref('post_pics').child(name).delete()
                    .then(() => {
                        console.log('Picture Deleted');
                    }).catch(err => {
                        console.error(err)
                    })
                dispatch({ type: 'DELETED' })
            }).catch(err => {
                console.error(err)
                dispatch({ type: 'DELETE_ERROR', err })
            })
    }
}

export const getUidPosts = (uid) =>{
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(uid)
        let a = [];
        await firestore.collection('posts').where('authId','==',uid).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                //console.log(doc.id)
                let obj = doc.data();
                obj.id=doc.id;
                console.log(obj)
                a.push(obj)
            })
            //console.log(a)
            
        }).catch(err=>{
            console.log('Error fetching data')
        })
        console.log(a)
         return a
        
    }
}