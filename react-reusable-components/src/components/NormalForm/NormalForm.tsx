import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-red-500 max-w-md p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "border border-blue-500 grid grid-cols-1 justify-items-center",
          {
            "md:grid-cols-2": double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="test" id="name" {...register("name")} />
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="test"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="test"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="password">
            Text area
          </label>
          <select>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
          </select>
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="name">
            Text area
          </label>
          <textarea></textarea>
        </div>

        <div className="w-full  max-w-md">
          <label className="block" htmlFor="name">
            Text area
          </label>
          <input
            className="border border-gray-400 rounded-md checked::bg purpale bg-purple-500"
            type="checkbox"
            name=""
            id=""
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
