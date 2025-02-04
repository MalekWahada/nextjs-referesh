'use client';

export default function GlobalError({error}: {
    error: Error & { digrest?: string};
}) {
  console.log({error});
  
  return (
    <html>
        <body>
            <h2>
                Global Error
            </h2>
        </body>
    </html>
  )
}
