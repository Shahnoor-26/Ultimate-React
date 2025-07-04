import { Link } from "react-router-dom";
import { service } from "../appwrite/configure";

const Card = ({ $id, title, picture }) => {
<<<<<<< HEAD
  const url = `${service.filePreview(picture)}&mode=admin`;
  console.log(url);
=======
  const url = `${service.filePreview(picture)}`;
>>>>>>> af21455ef8e03e448a7c84c08b900ba99c539cff

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full flex justify-center mb-4">
          <img src={url} alt={title} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
