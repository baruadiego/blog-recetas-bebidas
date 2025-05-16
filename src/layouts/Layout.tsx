import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Publicity from '../components/Publicity'
import Modal from '../components/Modal'
import Notification from '../components/Notificacion'

export default function Layout() {
  return (
    <>
        <Header></Header>
        <Publicity></Publicity>
        <Modal></Modal>
        <Notification></Notification>
        <div>
            <Outlet />
        </div>
    </>
  )
}
