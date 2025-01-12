import { useMessage } from 'naive-ui'

const useNotificationService = () => {
  const message = useMessage()

  const notify = ({
    type = 'info',
    content = '',
    duration = 3000,
    closable = true,
    onClose,
    placement = 'top-right',
  }) => {
    message[type](content, {
      duration,
      closable,
      onClose,
      placement,
    })
  }

  const notifySuccess = (content, options = {}) => {
    notify({ type: 'success', content, ...options })
  }

  const notifyError = (content, options = {}) => {
    notify({ type: 'error', content, ...options })
  }

  const notifyWarning = (content, options = {}) => {
    notify({ type: 'warning', content, ...options })
  }

  const notifyInfo = (content, options = {}) => {
    notify({ type: 'info', content, ...options })
  }

  return {
    notify,
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo,
  }
}

export default useNotificationService
