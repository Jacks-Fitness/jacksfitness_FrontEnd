const SocialKakao = ()=>
{
    const Rest_api_key='3f59f79bae850d70c6d79830dd51a72a' //REST API KEY
    const redirect_uri = 'http://localhost:3000/kakaologin' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}
export default SocialKakao