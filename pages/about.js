import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
   return (
      <>
         <Head>
            <title>| About</title>
            <link rel="icon" href="/logo/favicon.ico" />
         </Head>
         <div className='pb-4'>
            <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>About</p>
            <br />
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>Data types:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               In the EZL, we support basic data types, but unfortunately, we don't support arrays or pointers.
               <br></br>
               Supported types:   <br></br>

               • void: Only valid as a function return type to indicate that there is no value to return   <br></br>

               • int: It is an integer numeric value data type.   <br></br>

               • char: It is a character value data type.   <br></br>

               • float: It is a real numeric value data type.   <br></br>

               • char: It is a character value data type.   <br></br>

               • bool: It is a boolean value data type that accepts true or false.   <br></br>

            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'> Variable/Constant Declarations:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>

               In EZL, we support declaring scoped variables and constants. Each variable or constant has its own
               scope and multiple variables/constants can be declared with the same identifier only if they are in
               different scopes. As in the C language, constants must be initialized when they are declared.<br></br>
               example:
               <br></br>
               _________________________________________________
               <br></br>

               <code>
                  int x;
               </code> <br></br>


               <code>
                  const float PI = 3.14;
               </code> <br></br>


               <code>
                  char c = 'c';
               </code> <br></br>

               <code>

                  bool flag = true;
               </code> <br></br>

               <code>
                  int a = 0, b, MAX = 100;
               </code> <br></br>

               _________________________________________________


            </p>

            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               'If-Else Control Statements':</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               We support the if-else control statement in almost exactly the same way as in the C language.
               evaluates to a non-zero value, so the if-body will be executed. Otherwise, the other body will be
               executed if it exists. If-body and else-body can be one statement or can be multiple statements
               closed by a block.
               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/if.ezl" target="_blank">(EXAMPLE)</Link>
            </p>

            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               Exchange Declarations:</p>

            <br />

            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               Like the if statement, we support the switch statement in almost the same way as in the C language.
               switch-expression must be an integer value and case-expression must be a constant integer value.
               Also, multiple case expressions that evaluate to the same value are not allowed. Like C, the code of
               corresponding case will be executed and execution will continue in the code below other cases until a
               the break statement was encountered.
               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/switch.ezl" target="_blank">(EXAMPLE)</Link>
            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               For/While/Do-While Loops:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               EZL supports loops in almost exactly the same way as the C language. We support for loops, while loops,
               and do-while loops. Break-statements and continue-statements are supported within the scope of a
               loop and work as in the C language, interrupt or continue the execution of the innermost loop.

               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/loops.ezl" target="_blank">(EXAMPLE)</Link>
            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               Functions:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               EZL supports functions but with limited functionalities than C language.
               default parameters. We do not support protection

               function typing or function overloading.
               Callback statements are allowed within the scope of a function. And functions can only be defined in the
               Global scope.

               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/functions.ezl" target="_blank">(EXAMPLE)</Link>
            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               Expressions:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               In EZL, we support complex expressions similar to those of the C language.
               set of operators supported by the C language with the same precedence and associativity.

               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/expressions.ezl" target="_blank">(EXAMPLE)</Link>
            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               Comments:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               EZL supports the same comment styles as the C language. Comments can be:


               <br />
               <Link href="https://github.com/the-ezlang/ezl/blob/main/examples/comments.ezl" target="_blank">(EXAMPLE)</Link>
            </p>
            <br></br>
            <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
               Documentation:</p>
            <br />
            <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
               <Link href="https://github.com/the-ezlang/ezl/">[GITHUB REPOSITORY]</Link>
               <br />
            </p>

         </div>

      </>

   )
}
