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
  keyboardType?: "default" | "numeric";
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
  keyboardType,
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
    <View>
      {label && <Text className="pl-4 pb-2">{label}</Text>}
      <View
        className={clsx(
          "w-full flex-row items-center bg-white rounded-[10px] shadow-sm overflow-hidden shadow-[#000002]",
          {
            ["border-[1px] border-error "]: errors,
          }
        )}
      >
        {icon && (
          <View className=" pl-[16px]">
            <Feather
              name={icon}
              size={30}
              color={errors ? "#E00000" : "#4977FF"}
            />
          </View>
        )}
        <TextInput
          className="w-full bg-white flex-1 p-4"
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={typePassword === "password" ? true : false}
          keyboardType={keyboardType}
          multiline={type === "textarea" ? true : false}
          numberOfLines={type === "textarea" ? 3 : 1}
          style={type === "textarea" ? { textAlignVertical: "top" } : null}
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
    </View>
  );
}
