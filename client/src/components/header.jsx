import React from "react";

const header = () => {
    return (
        <>
            <title>
                {title}
            </title>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="A TODO list web app." />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </>
    );
};

export default header;