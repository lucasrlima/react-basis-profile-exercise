/* eslint-disable react/prop-types */
import styles from "./styles.module.css"
import Avatar from "../Avatar"
import SocialButton from "../SocialButton"
import ProfileSection from "./ProfileSection"
import ProfileTitle from "./ProfileTitle"
import FollowButton from "../FollowButton"

export default

function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, instagramUrl}) {

    function handleClick(event) {
        console.log(event)
        alert("Você está seguindo!");
    }

    return (
        <>
        <div className={styles.profileCard}>
            <Avatar avatar={avatar} name={name} />

            <ProfileTitle>
                {name}
                <br/>
                <FollowButton onClick={handleClick}>
                    
                </FollowButton>
            </ProfileTitle> 
            
            <ProfileSection>{phone}</ProfileSection>

            <ProfileSection>{email}</ProfileSection>

            <ProfileSection>{bio}</ProfileSection>

            <ProfileSection/>

            <SocialButton text="GitHub" link={githubUrl}/>
            
            <SocialButton text="LinkedIn" link={linkedinUrl}/>
            
            <SocialButton text="Instagram" link={instagramUrl}/>
        
        </div>

        </>
    )
}