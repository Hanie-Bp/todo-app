// export default function SignInLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body >
//         <main className="min-h-screen flex items-center justify-center bg-[url(/images/bg-todo.jpg)]" >
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

import "../globals.css"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // console.log("/////////////////////////////////////////////////AuthLayout loaded");
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center bg-[url(/images/bg-todo.jpg)] bg-cover" >
          {children}
        </main>
      </body>
    </html>
  );
}