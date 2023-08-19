import { SecondaryButton } from "../secondary-button/secondary-button";
import { Textarea } from "../textarea/textarea";

export const CreateCommentForm = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Textarea
        name="comment"
        placeholder="What are your comments?"
        onChange={handleChange}
        value=""
        rows={4}
      />
      <div className="flex justify-end">
        <SecondaryButton>Response</SecondaryButton>
      </div>
    </form>
  );
};
