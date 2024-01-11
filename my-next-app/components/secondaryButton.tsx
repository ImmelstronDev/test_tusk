interface ButtonProps {
  label: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="font-sans text-xl  font-medium rounded-full text-deepBlue bg-blue bg-opacity-15 px-10 py-4 dark:bg-black dark:border-2 dark:border-white dark:text-white max-sm:px-8 max-sm:py-3 max-sm:text-lg">
      {label}
    </button>
  );
};

export default SecondaryButton;
