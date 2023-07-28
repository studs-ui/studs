import { ToastProps } from "../components/overlays/toast";

function createToast(data: ToastProps) {
  const toaster = document.querySelector("studs-toaster");
  if (toaster) {
    toaster.createToast(data);
  }
}
