import clsx from "clsx";
import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  transparent?: boolean;
  onPress?: () => void;
}

export function Button({
  children,
  transparent,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={clsx(
        "w-full h-[65px] px-[10px] py-[20px] rounded-lg flex items-center justify-center",
        {
          ["bg-primary300"]: transparent === undefined,
          ["bg-transparent border-primary300 border-2"]: transparent == true,
        }
      )}
      onPress={onPress}
      {...rest}
    >
      <Text
        className={clsx("text-[16px] font-bold", {
          ["text-neutral-50"]: transparent === undefined,
          ["text-primary300"]: transparent == true,
        })}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
