import { toast } from "react-toastify";

export const ToastResponse = (text: string, functionActive: string) => {
  if (functionActive === "success") {
    return toast.success(`${text}`);
  }

  if (functionActive === "error") {
    return toast.error(`${text}`);
  }
};

export const ToastPending = (text: string) => {
  toast.info(`${text}`);
};
