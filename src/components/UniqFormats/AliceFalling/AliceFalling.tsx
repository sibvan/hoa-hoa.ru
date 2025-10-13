import "./AliceFalling.scss";

function AliceFalling({ image }: { image: string }) {
  return (
    <div className="chapter__format alice-falling">
      <img className="alice-falling__alice" src={image} alt="" />
    </div>
  );
}

export default AliceFalling;
