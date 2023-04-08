import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";

import { Formik } from "formik";
import * as yup from "yup";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { api } from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
  const toast = useToast();

  const { navigate } = useNavigation();

  const loginUser = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/user/login", {
        email,
        password,
      });

      if (!data.token) {
        toast.show("E-mail ou senha errado, tente novamente", {
          type: "danger",
          placement: "top",
        });

        return;
      }

      await AsyncStorage.setItem("refresh_token", data.refreshToken.id);
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user_id", data.refreshToken.user_id);
      await AsyncStorage.setItem("user_email", email);
      await AsyncStorage.setItem("user_password", password);

      navigate("home" as never);
    } catch (error) {
      toast.show("Não foi possivel entrar", {
        type: "warning",
        placement: "top",
      });
      console.log(error);
    }
  };

  return (
    <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
      <View className="w-full items-center z-10">
        <Text className="mb-10 text-[61px] font-bold text-center text-primary500">
          Entrar
        </Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          loginUser(values.email, values.password);
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email("E-mail inválido")
            .required("E-mail obrigatório"),
          password: yup
            .string()
            .required("Senha obrigatória")
            .min(6, "No mínimo 6 caracteres"),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View className="w-full flex-col gap-y-5">
            <View className="w-full flex-col gap-y-5">
              <View>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  placeholder="E-mail"
                  icon="mail"
                  errors={errors.email}
                  type="text"
                />
                {touched.email && errors.email && (
                  <Text className="text-[12px] ml-5 leading-[24px]  text-error">
                    {errors.email}
                  </Text>
                )}
              </View>

              <View>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  placeholder="Senha"
                  icon="lock"
                  errors={errors.password}
                  isEyePassword
                  type="password"
                />
                {touched.password && errors.password && (
                  <Text className="text-[12px] ml-5 leading-[24px] text-error">
                    {errors.password}
                  </Text>
                )}
              </View>
            </View>

            <View className="w-full">
              <Button disabled={!isValid} onPress={handleSubmit}>
                Entrar
              </Button>
            </View>
          </View>
        )}
      </Formik>

      <View className="w-full">
        <Text className="text-center pt-8 border-t-[1px] border-t-slate-300">
          Ainda não possui uma conta?{" "}
          <Text
            className="font-bold underline"
            onPress={() => navigate("signup" as never)}
          >
            Cadastre-se!
          </Text>
        </Text>
      </View>
    </View>
  );
}
