import Head from 'next/head'
import Link from 'next/link'

export default function HomePage(){
    const doctxtlink = "https://github.com/the-ezlang/ezl/tree/main/docs";
    return(
        <>
        <Head>
            <title>| Home</title>
            <link rel="icon" href="/logo/favicon.ico" />
        </Head>
        <div className='pb-4'>
        <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>Welcome</p>
        <br/>
        <p className='text-neutral-800 dark:text-neutral-50 text-1xl md:text-2xl lg:text-4xl font-bold tracking-tight'> Introduction:</p>
        <br/>
           <p className='text-slate-800 dark:text-neutral-300 md:text-lg lg:text-xl py-px'>
    
            EZL is a simple programming language compiler similar to C language but with less functionality,
            yet EZL preserves the complex expressions and branching instructions of the C language.
            In EZL, we use Flex (a Lex-like compiler generation tool) to generate the lexer parser and
            used Bison (a Yacc-like compiler generation tool) to generate the parser.
            Although EZL is a mini version of the C language, it provides powerful error handling techniques with
            Significant error message reports for various syntax and semantic error scenarios.
            <br></br>
            
            Documentation:<Link href={doctxtlink} target="_blank">[doc.txt]</Link>
              </p>
           
              
              
        </div>

        </>

    )
}