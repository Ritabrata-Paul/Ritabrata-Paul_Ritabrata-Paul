import React from "react";
import Head from "next/head";

interface HeadMetadataProps {
  imageID: string;
}

export default function HeadMetadata({ imageID }: HeadMetadataProps) {
  return (
    <Head>
      <meta
        name="description"
        content="Random Image Display and Share with React and NextJs."
      />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, TypeScript, React, Vite, TailwindCSS"
      />
      <meta name="author" content="Ritabrata Paul" />
      <title>Random Image Display and Share with React and NextJs</title>

      {/* Facebook */}
      <meta property="og:title" content="Random Image from Lorem Picsum" />
      <meta
        property="og:image"
        content={`https://picsum.photos/seed/${imageID}/1200/630`}
      />
      <meta property="og:image:alt" content="Random Image from Lorem Picsum" />
      <meta
        property="og:url"
        content={`https://ritabrata-paul-ritabrata-paul.vercel.app/${imageID}`}
      />
      <meta
        property="og:description"
        content="Random Image Display and Share with React and NextJs."
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content={`https://picsum.photos/seed/${imageID}/1200/630`}
      />
      <meta
        property="twitter:image:alt"
        content="Random Image from Lorem Picsum"
      />
      <meta name="twitter:title" content="Random Image Display and Share with React and NextJs" />
      <meta name="twitter:creator" content="@@RitabrataP81237" />
      <meta
        name="twitter:description"
        content="Random Image Display and Share with React and NextJs."
      />

      {/* WhatsApp */}
      <meta
        property="og:image"
        content={`https://picsum.photos/seed/${imageID}/300/300.jpg`}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
    </Head>
  );
}
