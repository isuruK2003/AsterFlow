import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

interface AlertBoxProps {
    message: string;
    triggerButtonName?: string;
    isOpen?: boolean;
    title?: string;
    cancelButtonName?: string;
    okButtonName?: string;
    cancelButtonCallback?: () => void;
    okButtonCallback?: () => void;
}

export default function AlertBox({
    message,
    triggerButtonName = "Trigger",
    isOpen = false,
    title = "Alert",
    cancelButtonName = "Cancel",
    okButtonName = "Ok",
    cancelButtonCallback,
    okButtonCallback,
}: AlertBoxProps) {
    const [open, setOpen] = useState<boolean>(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const close = () => {
        setOpen(false);
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            {triggerButtonName && <AlertDialogTrigger>{triggerButtonName}</AlertDialogTrigger>}
            <AlertDialogContent>
                <AlertDialogHeader>
                    {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
                    <AlertDialogDescription>{message}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {cancelButtonName && (
                        <AlertDialogCancel
                            onClick={() => {
                                if (cancelButtonCallback) cancelButtonCallback();
                                close();
                            }}
                        >
                            {cancelButtonName}
                        </AlertDialogCancel>
                    )}
                    <AlertDialogAction
                        onClick={() => {
                            if (okButtonCallback) okButtonCallback();
                            close();
                        }}
                    >
                        {okButtonName}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
