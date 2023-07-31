import { ToastProps } from "../components/overlays/toast";

export function createToast(data: ToastProps) {
  const toaster = document.querySelector("studs-toaster");
  if (toaster) {
    toaster.createToast(data);
  }
}

export function createStandardToast() {
  createToast({
    type: 'info',
    heading: 'Toast',
    message: 'New Toast',
    position: 'top-right', // or 'top-left', 'bottom-left', 'bottom-right'
    closeable: true
  });
}

export function createErrorToast() {
  createToast({
    type: 'error',
    heading: 'Error',
    message: 'You Clicked this Toast',
    position: 'top-right',
    closeable: true
  });
}

export function createWarningToast() {
  createToast({
    type: 'warning',
    heading: 'Warning',
    message: 'Dont tell JP Kandy won',
    position: 'top-right',
    closeable: true
  });
}

export function createSuccessToast() {
  createToast({
    type: 'success',
    heading: 'Success',
    message: 'Youre a winner, baby',
    position: 'top-right',
    closeable: true,
    action: 'celebrate',
    onActionClick: () => alert('Celebration time!')
  });
}
