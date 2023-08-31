import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useToast } from "react-native-toast-notifications";

import { Input } from "../Input";
import { Button } from "../Button";
import Modal from "react-native-modal";

import ExpenseImage from "../../assets/expensebutton.svg";
import CloseImage from "../../assets/close.svg";
import { UserAuth } from "../../context/FireBaseAuth";
import { FIREBASE_DB } from "../../../FireBaseConfig";
import { ref, set } from "firebase/database";

export default function Expense() {
  const toast = useToast();
  const { user } = UserAuth();
  const db = FIREBASE_DB;

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        className="relative"
      >
        <View className="bg-white rounded p-[16px] justify-center items-center">
          <View className="relative w-full justify-center">
            <Text className="text-h4 text-primary500 text-center">
              Nova saída
            </Text>
            <TouchableOpacity
              className="absolute top-3 right-0"
              onPress={() => setModalVisible(false)}
            >
              <CloseImage />
            </TouchableOpacity>
          </View>

          <Formik
            initialValues={{
              title: "",
              value: "",
              description: "",
            }}
            onSubmit={async (values) => {
              // set(ref(db, "users/" + user?.uid), {
              //   email: user?.email,
              // })
              //   .then(() => {
              //     // Dados:
              //     // title: values.title,
              //     // value: Number(values.value),
              //     // description: values.description,
              //     // type: "Income",
              //     // user_id: user_id,

              //     setModalVisible(false);
              //     toast.show("Saída criada com sucesso!", {
              //       type: "success",
              //       placement: "top",
              //     });

              //     alert("Data updated");
              //   })
              //   .catch((error) => {
              //     alert(error);
              //   });
            }}
            validationSchema={yup.object().shape({
              title: yup
                .string()
                .required("Título é obrigatório")
                .min(2, "No mínimo 4 caracteres"),
              value: yup
                .number()
                .required("Valor é obrigatório")
                .min(3, "No mínimo 3 caracteres"),
              description: yup.string(),
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
                      value={values.title}
                      onChangeText={handleChange("title")}
                      onBlur={() => setFieldTouched("title")}
                      errors={errors.title}
                      label="Título"
                      placeholder="ex: Aluguel"
                      type="text"
                    />
                    {touched.title && errors.title && (
                      <Text className="text-[12px] ml-5 leading-[24px]  text-error">
                        {errors.title}
                      </Text>
                    )}
                  </View>

                  <View>
                    <Input
                      value={values.value}
                      onChangeText={handleChange("value")}
                      onBlur={() => setFieldTouched("value")}
                      placeholder="ex: 1.200,00 $"
                      keyboardType="numeric"
                      label="Valor"
                      errors={errors.value}
                      type="text"
                    />
                    {touched.value && errors.value && (
                      <Text className="text-[12px] ml-5 leading-[24px] text-error">
                        {errors.value}
                      </Text>
                    )}
                  </View>

                  <View>
                    <Input
                      value={values.description}
                      onChangeText={handleChange("description")}
                      onBlur={() => setFieldTouched("description")}
                      placeholder="ex: Pagamento do aluguel com IPTU "
                      label="Descrição"
                      errors={errors.description}
                      type="textarea"
                    />
                    {touched.description && errors.description && (
                      <Text className="text-[12px] ml-5 leading-[24px] text-error">
                        {errors.description}
                      </Text>
                    )}
                  </View>
                </View>

                <View className="w-full">
                  <Button disabled={!isValid} onPress={handleSubmit}>
                    Nova saída
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </Modal>

      <View className="flex-1 max-w-[100px] justify-center">
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
          style={styles.shadow}
          onPress={() => setModalVisible(true)}
        >
          <ExpenseImage color="#4977FF" width={35} height={35} />
        </TouchableOpacity>
        <Text className="text-caption text-center mt-3">Saída</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: "#0f0f0f61",
  },
});
