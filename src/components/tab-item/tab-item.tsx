interface TabItemProps {
  id: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
  title: string;
}

export const TabItem = ({
  id,
  activeTab,
  setActiveTab,
  title,
}: TabItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <li
      className={`p-px  ${
        activeTab === id ? "border-b-4 border-border-active" : ""
      }`}
    >
      <button onClick={handleClick}>{title}</button>
    </li>
  );
};
