import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-1">
      <div className="object-contain ml-2">
        <Image src="/logo.png" width={90} height={40} alt="Blogio" />
      </div>
      {renderDefault(props)}
    </div>
  );
}

export default Logo;
