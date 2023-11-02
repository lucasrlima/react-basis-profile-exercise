/* eslint-disable react/prop-types */
import styles from "./styles.module.css"
import Avatar from "../Avatar"
import SocialButton from "../SocialButton"
import ProfileSection from "./ProfileSection"
import ProfileTitle from "./ProfileTitle"
import FollowButton from "../FollowButton"
import { useState } from "react"

export default

function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, instagramUrl}) {

    const [followText, setFollowText] = useState("I will Follow")

    function handleClick(event) {
        alert("Você está seguindo!");
        setFollowText("Following")
    }

    return (
        <>
        <div className={styles.profileCard}>
            <Avatar avatar={avatar} name={name} />

            <ProfileTitle>
                {name}
                <br/>
                <FollowButton onClick={handleClick}
                 followText={followText}
                >    
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