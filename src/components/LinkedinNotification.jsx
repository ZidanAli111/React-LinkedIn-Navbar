import { useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from '../atoms/linkedinAtom';
import './linkedin.css';


export function LinkedinNotification() {
    const networkAtomCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const NotificationsAtomCount = useRecoilValue(notificationAtom);
    const messageAtomCount = useRecoilValue(messageAtom)
   
    const totalNotificationCount=useRecoilValue(totalNotificationSelector);
   
    /**
     * we can use either Recoil Selector or useMemo() Hook
     * but selector are little better in case you want to use another feature or another selector along with
     * this selector
     * 
     */

    // const totalNotificationCount=useMemo(()=>{
    //     return networkAtomCount + jobsAtomCount + NotificationsAtomCount + messageAtomCount;
    // }, [networkAtomCount, jobsAtomCount, NotificationsAtomCount, messageAtomCount])

    return (
        <div className='linkedin-container'>
            <button className='home-btn'>🏠︎</button>
            <button className='network-notification-btn'>My network({networkAtomCount >= 100 ? "99+" : networkNotificationCount})</button>
            <button className='jobs-btn'>Jobs({jobsAtomCount})</button>
            <button className='messages-btn'>Messages({messageAtomCount})</button>
            <button className='notification-btn'>Notifications({NotificationsAtomCount})</button>
            <UpdateMessageCount></UpdateMessageCount>
            <button>Me({totalNotificationCount})</button>
        </div>
    )
}


function UpdateMessageCount() {
    const setMessageAtomCount = useSetRecoilState(messageAtom);
    return (
        <button className='me-btn' onClick={() => {
            setMessageAtomCount(c => c + 1);
        }}>Click me</button>
    )
}


