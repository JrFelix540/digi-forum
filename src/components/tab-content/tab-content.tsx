interface TabContentProps {
  id: string;
  activeTab: string;
  children: React.ReactElement;
}
export const TabContent = ({ id, activeTab, children }: TabContentProps) => {
  return activeTab === id && <div>{children}</div>;
};
