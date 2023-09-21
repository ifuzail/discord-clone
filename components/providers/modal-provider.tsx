"use client"

import { CreateServerModal } from '@/components/models/create-server-modal'
import { useEffect, useState } from 'react'
import { InviteModal } from '../models/invite-modal'
import { EditServerModal } from '../models/edit-server-modal'
import { MembersModal } from '../models/members-modal'
import { CreateChannelModal } from '../models/create-channel-modal'
import { LeaverServerModal } from '../models/leave-server-modal'
import { DeleteServerModal } from '../models/delete-server-modal'
import { DeleteChannelModal } from '../models/delete-channel-modal'
import { EditChannelModal } from '../models/edit-channel-modal'

export const ModalProvider = () => {
    
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
 if (!isMounted) {
    return null;
 }

    return (
        <>
         <CreateServerModal />
         <InviteModal/>
         <EditServerModal/>
         <MembersModal/>
         <CreateChannelModal/>
         <LeaverServerModal/>
         <DeleteServerModal/>
         <DeleteChannelModal/>
         <EditChannelModal/>
        </>
    )
}