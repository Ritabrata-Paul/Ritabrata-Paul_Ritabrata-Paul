import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function Share({ imageID }: { imageID: string }) {
  const LINK = `vercel-link/${imageID}`;

  return (
    <div className="inline-block m-2">
      <p className="font-bold mt-2 text-center">SHARE IMAGE ON</p>

      <FacebookShareButton
        className="m-1"
        title="Random Image Display from picsum photos"
        url={LINK}
      >
        <FacebookIcon round size={40} />
      </FacebookShareButton>

      <WhatsappShareButton
        className="m-1"
        title="Random Image Display from picsum photos"
        url={LINK}
      >
        <WhatsappIcon round size={40} />
      </WhatsappShareButton>

      <TwitterShareButton
        className="m-1"
        title="Random Image Display from picsum photos"
        url={LINK}
      >
        <TwitterIcon round size={40} />
      </TwitterShareButton>
    </div>
  );
}
