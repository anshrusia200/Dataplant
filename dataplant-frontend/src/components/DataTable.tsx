import { Pencil, Trash2 } from "lucide-react";

export const DataTable = () => {
  return (
    <div className="flex mt-6 font-nunito-sans ">
      <table className="table-auto w-full border-2 text-sm">
        <thead className="bg-[#e1deea] p-4 font-semibold">
          <tr className="text-left">
            <th className="w-[15%] p-2">Title</th>
            <th className="w-[50%] ">Description</th>
            <th>Subject</th>
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="w-full bg-[#ffffff]">
          <tr className="border-b-2 font-medium ">
            <td className="ml-1 pl-2">Sample title</td>
            <td className="line-clamp-2 mr-1 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi suscipit dignissimos repellendus nostrum, eaque nemo
              consequuntur excepturi itaque consectetur debitis, iusto inventore
              alias ad maxime laboriosam reiciendis, ut voluptas ratione
              temporibus error aspernatur laudantium! Expedita voluptas maiores
              qui nostrum, a iste quisquam porro harum necessitatibus
              consequuntur mollitia, ad minima?
            </td>

            <td>1961</td>
            <td>1961</td>
            <td>
              <button className="mx-1">
                <Pencil size="18px" />
              </button>
              <button className="mx-1">
                <Trash2 size="18px" />
              </button>
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="ml-1 pl-2">Sample title</td>
            <td className="line-clamp-2 mr-1 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi suscipit dignissimos repellendus nostrum, eaque nemo
              consequuntur excepturi itaque consectetur debitis, iusto inventore
              alias ad maxime laboriosam reiciendis, ut voluptas ratione
              temporibus error aspernatur laudantium! Expedita voluptas maiores
              qui nostrum, a iste quisquam porro harum necessitatibus
              consequuntur mollitia, ad minima?
            </td>

            <td>1961</td>
            <td>1961</td>
            <td>
              <button>
                <Pencil />
              </button>
              <button>
                <Trash2 />
              </button>
            </td>
          </tr>
          <tr className="border-b-2">
            <td className="ml-1 pl-2">Sample title</td>
            <td className="line-clamp-2 mr-1 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi suscipit dignissimos repellendus nostrum, eaque nemo
              consequuntur excepturi itaque consectetur debitis, iusto inventore
              alias ad maxime laboriosam reiciendis, ut voluptas ratione
              temporibus error aspernatur laudantium! Expedita voluptas maiores
              qui nostrum, a iste quisquam porro harum necessitatibus
              consequuntur mollitia, ad minima?
            </td>

            <td>1961</td>
            <td>1961</td>
            <td>
              <button>
                <Pencil />
              </button>
              <button>
                <Trash2 />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
