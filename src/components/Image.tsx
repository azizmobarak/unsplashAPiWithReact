type Props = {
    url : string;
    description: string;
}

export default function Image ({url, description}: Props){
    return <img width={200} height={200} src={url} alt={description} />
}