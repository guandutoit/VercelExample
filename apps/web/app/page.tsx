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
import { Main } from "next/document";


export default function Home() {
  
  return (
  <div className="container mx-auto">
    <h1>Home</h1>
  </div>)
  // return (
  //   <div>

  //       <Button variant="destructive">Click Me</Button>

  //       <CalendarDateRangePicker />
  //       <DemoDatePicker />

  //       <DemoContainer>
  //         <DemoDatePicker />
  //       </DemoContainer>
  //       <AlertDialog>
  //         <AlertDialogTrigger>Open</AlertDialogTrigger>
  //         <AlertDialogContent>
  //           <AlertDialogHeader>
  //             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
  //             <AlertDialogDescription>
  //               This action cannot be undone. This will permanently delete your account
  //               and remove your data from our servers.
  //             </AlertDialogDescription>
  //           </AlertDialogHeader>
  //           <AlertDialogFooter>
  //             <AlertDialogCancel>Cancel</AlertDialogCancel>
  //             <AlertDialogAction>Continue</AlertDialogAction>
  //           </AlertDialogFooter>
  //         </AlertDialogContent>
  //       </AlertDialog>

  //   </div>
  // );
}
