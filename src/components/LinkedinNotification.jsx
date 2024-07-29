import { jobsAtom, messageAtom, networkAtom, notificationAtom } from '../atoms/linkedinAtom'
import { useRecoilValue } from 'recoil'
import './linkedin.css'


export function LinkedinNotification() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const NotificationsAtomCount = useRecoilValue(notificationAtom);
    const messageAtomCount = useRecoilValue(messageAtom);


    return (
        <div className='linkedin-container'>
            <button className='home-btn'>Home</button>
            <button className='network-notification-btn'>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
            <button className='jobs-btn'>Jobs({jobsAtomCount})</button>
            <button className='messages-btn'>Messages({messageAtomCount})</button>
            <button className='notification-btn'>Notifications({NotificationsAtomCount})</button>
            <button className='me-btn'>Me</button>
        </div>
    )
}