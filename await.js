Users.findOne('zero')
    .then((user) => {
        console.log(user);
        return Users.update('zero', 'nero');
    })
    .then((updatedUser) => {
        console.log(updatedUser);
        return Users.remove('nero');
    })
    .then((removedUser) => {
        console.log(removedUser);
    })
    .catch((err) => {
        console.error(err);
    });
    console.log("다 찾았나?");




    // async func() => {
    // try {
    //     const user = await Users.findOne('zero');
    //     const updateUser = await Users.update('zero', 'nero');
    //     const removedUser = await Users.remove('nero');
    //     console.log('다 찾았나?');
    // } catch (e) {
    //     consoe.error(e);
    //     }
    // }
    // func();

//async await을 사용하면 순서를 자유자재로 조정할 수 있다.

