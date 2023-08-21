"use client";
import { PATH } from "@/config/menuConfig";
import TransitionContext from "@/context/TransitionContext";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";

const PostControl = () => {
  const router = useRouter();
  const { chooseUrl } = useContext(TransitionContext);
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <button onClick={() => chooseUrl(PATH.basic.create.href)}>
          Create
        </button>
      </li>
      {id ? (
        <>
          <li>
            <button
              onClick={() => chooseUrl(`${PATH.basic.update.href}/${id}`)}
            >
              Update
            </button>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(`${process.env.API_URL}/topics/${id}`, options)
                  .then((resp) => resp.json())
                  .then((result) => {
                    chooseUrl("/basic");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default PostControl;
