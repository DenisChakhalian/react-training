function Login() {
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(event.target.username.value)
        console.log(event.target.password.value)
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        console.log(userData)
        alert(JSON.stringify(userData))

    }

    return (
        <>
            <h1>ロギン</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    名前:
                    <input type="text" name="username"/>
                </label>
                <label>
                    パスワード:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">中</button>
            </form>
        </>
    )
}

export default Login;