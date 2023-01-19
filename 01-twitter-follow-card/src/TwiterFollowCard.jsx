import React, {useState} from 'react';

const TwiterFollowCard = ({user}) => {

    const [follow, setFollow] = useState(user.isFollowing);

    const buttonClassName = follow
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () => {
        setFollow(!follow)
      }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={`Avatar de ${user.userName}`} src={`https://unavatar.io/${user.userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{user.name}</strong>
                    <span className="tw-followCard-infoUserName">{`@${user.userName}`}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>  
                    <span className='tw-followCard-text'>{follow ? 'Siguiendo' : 'Seguir' }</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwiterFollowCard;

