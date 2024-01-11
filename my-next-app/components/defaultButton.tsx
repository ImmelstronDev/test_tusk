interface ButtonProps {
  label: string;
}

const DefaultButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="font-sans font-medium text-xl rounded-full text-white bg-blue px-10 py-4 dark:bg-deepBlue max-sm:px-8 max-sm:py-3 max-sm:text-lg ">
      {label}
    </button>
  );
};

export default DefaultButton;
