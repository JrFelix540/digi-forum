import { Button } from "../button/button";
import { Input } from "../input/input";
import { Textarea } from "../textarea/textarea";

export const CreateThreadForm = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        name="title"
        onChange={handleChange}
        value=""
        variant="outlined"
        placeholder="Title"
      />
      <Input
        name="category"
        onChange={handleChange}
        value=""
        variant="outlined"
        placeholder="Category"
      />
      <Textarea
        name="content"
        onChange={handleChange}
        value=""
        placeholder="Tell people what you have to say"
        variant="outline"
      />
      <div className="px-4 flex justify-center">
        <Button variant="secondary" type="submit">
          Add Thread
        </Button>
      </div>
    </form>
  );
};
