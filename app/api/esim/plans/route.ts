import { NextRequest } from "next/server";
import { runEsimServerOperation } from "@/lib/esim/server/service";
import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";
import { requireCountryCode } from "@/lib/esim/server/validation";

export async function GET(request: NextRequest) {
  try {
    const countryCodeParam =
      request.nextUrl.searchParams.get("countryCode");

    const countryCode = countryCodeParam
      ? requireCountryCode(countryCodeParam)
      : undefined;

    const plans = await runEsimServerOperation(
      async ({ provider }) => {
        return provider.getPlans(countryCode);
      }
    );

    return createEsimApiSuccessResponse(plans);
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
