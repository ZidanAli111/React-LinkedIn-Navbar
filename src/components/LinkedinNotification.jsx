import { useRecoilState, useRecoilValue } from 'recoil';
import {  notifications, totalNotificationSelector } from '../atoms/linkedinAtom';
import './linkedin.css';


export function LinkedinNotification() {

    const networkCount = useRecoilValue(notifications);

    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

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
            <button className='network-notification-btn'>My network({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
            <button className='jobs-btn'>Jobs({networkCount.jobs})</button>
            <button className='messages-btn'>Messages({networkCount.messaging})</button>
            <button className='notification-btn'>Notifications({networkCount.notifications})</button>
            {/* <UpdateMessageCount></UpdateMessageCount> */}
            <button>Me({totalNotificationCount})</button>
        </div>
    )
}


// function UpdateMessageCount() {
//     const setMessageAtomCount = useSetRecoilState(messageAtom);
//     return (
//         <button className='me-btn' onClick={() => {
//             setMessageAtomCount(c => c + 1);
//         }}>Click me</button>
//     )
// }


