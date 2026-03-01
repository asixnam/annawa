import { onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export function useInactivityTimeout(timeoutMs: number = 30000) {
    const auth = useAuthStore()
    const router = useRouter()
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const resetTimer = () => {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            auth.logout()
            router.push('/login')
        }, timeoutMs)
    }

    const handleActivity = () => {
        resetTimer()
    }

    onMounted(() => {
        resetTimer()
        window.addEventListener('mousemove', handleActivity)
        window.addEventListener('mousedown', handleActivity)
        window.addEventListener('keypress', handleActivity)
        window.addEventListener('scroll', handleActivity)
        window.addEventListener('touchstart', handleActivity)
    })

    onUnmounted(() => {
        if (timeoutId) clearTimeout(timeoutId)
        window.removeEventListener('mousemove', handleActivity)
        window.removeEventListener('mousedown', handleActivity)
        window.removeEventListener('keypress', handleActivity)
        window.removeEventListener('scroll', handleActivity)
        window.removeEventListener('touchstart', handleActivity)
    })
}
