import { ChangeEvent, useState } from "react";
import { View, TextInput, Text } from "react-native";
import clsx from "clsx";
import colors from "tailwindcss/colors";

import { Feather } from "@expo/vector-icons";

type IconName = keyof typeof Feather["glyphMap"];

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: IconName;
  isEyePassword?: boolean;
  errors?: any;

  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: () => void;
}

export function Input({
  label,
  type,
  placeholder,
  icon,
  isEyePassword,
  errors,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState(type);

  function handleShowPassword() {
    setShowPassword(!showPassword);
    typePassword === "password"
      ? setTypePassword("text")
      : setTypePassword("password");
  }

  return (
    <>
      <View
        className={clsx(
          "w-full flex-row items-center bg-white rounded-[10px] shadow-sm overflow-hidden shadow-[#000002]",
          {
            ["border-[1px] border-error "]: errors,
          }
        )}
      >
        {icon && (
          <View className="pr-[16px] pl-[16px]">
            <Feather
              name={icon}
              size={30}
              color={errors ? "#E00000" : "#4977FF"}
            />
          </View>
        )}
        <TextInput
          className="w-full bg-white flex-1 py-[16px]"
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={typePassword === "password" ? true : false}
          {...rest}
        />
        {isEyePassword &&
          (showPassword ? (
            <View className="pr-[16px]">
              <Feather
                onPress={handleShowPassword}
                name={"eye"}
                size={30}
                color={errors ? "#E00000" : "#4977FF"}
              />
            </View>
          ) : (
            <View className="pr-[16px]">
              <Feather
                onPress={handleShowPassword}
                name={"eye-off"}
                size={30}
                color={errors ? "#E00000" : "#4977FF"}
              />
            </View>
          ))}
      </View>
    </>
  );
}
