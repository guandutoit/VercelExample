import { Button } from "@repo/ui/components/ui/button";
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
} from "@repo/ui/components/ui/alert-dialog"
import { CalendarDateRangePicker } from "@repo/ui/components/ui/date-range-picker"
import { DemoDatePicker } from "@repo/ui/components/ui/date-picker"
import { cn } from "@repo/ui/lib/utils"


export default function Home() {
  const handleConfirm = () => {
    // Handle confirm action here
  };

  const handleCancel = () => {
    // Handle cancel action here
  };
  function DemoContainer({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    
    return (
      <div
        className={cn(
          "flex items-center justify-center [&>div]:w-full",
          className
        )}
        {...props}
      />
    )
  }
  return (
    <div>
      
        <Button variant="destructive">Click Me</Button>

        <CalendarDateRangePicker />
        <DemoDatePicker />

        <DemoContainer>
          <DemoDatePicker />
        </DemoContainer>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

    </div>
  );
}
