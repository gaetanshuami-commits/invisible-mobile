import { runEsimServerOperation } from "@/lib/esim/server/service";
import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";

export async function GET() {
  try {
    const countries = await runEsimServerOperation(
      async ({ provider }) => {
        return provider.getCountries();
      }
    );

    return createEsimApiSuccessResponse(countries);
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
