import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import { Formik } from "formik";
import * as yup from "yup";
import { api } from "../lib/axios";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function SignUp() {
  const toast = useToast();
  const { navigate } = useNavigation();

  async function createUser(email: string, password: string) {
    try {
      const { data } = await api.post("/user", {
        email,
        password,
      });

      console.log(data);

      if (data.status === "Error") {
        toast.show("E-mail já está em uso.", {
          type: "danger",
          placement: "top",
        });
      }

      if (!data.status) {
        toast.show("Usuário criado com sucesso!", {
          type: "success",
          placement: "top",
        });

        navigate("welcome" as never);
      }
    } catch (error) {
      toast.show("Não foi possivel criar o usuário", {
        type: "warning",
        placement: "top",
      });
      console.log(error);
    }
  }

  return (
    <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
      <View className="w-full items-center z-10">
        <Text className="mb-10 text-[61px] font-bold text-center text-primary500">
          Criar conta
        </Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          createUser(values.email, values.password);
          "welcome" as never;
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
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
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

              <View>
                <Input
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={() => setFieldTouched("confirmPassword")}
                  placeholder="Confirmar senha"
                  icon="lock"
                  errors={errors.confirmPassword}
                  isEyePassword
                  type="password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text className="text-[12px] ml-5 leading-[24px] text-error">
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </View>

            <View className="w-full">
              <Button disabled={!isValid} onPress={handleSubmit}>
                Criar conta
              </Button>
            </View>
          </View>
        )}
      </Formik>

      <View className="w-full">
        <Text className="text-center pt-8 border-t-[1px] border-t-slate-300">
          Já possui uma conta?{" "}
          <Text
            className="font-bold underline"
            onPress={() => navigate("signin" as never)}
          >
            Entrar agora!
          </Text>
        </Text>
      </View>
    </View>
  );
}
