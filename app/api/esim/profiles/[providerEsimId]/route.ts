import { runEsimServerOperation } from "@/lib/esim/server/service";
import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";
import { requireOwnedEsimProfile } from "@/lib/esim/server/ownership";
import { requireProviderEsimId } from "@/lib/esim/server/validation";

type RouteContext = {
  params: Promise<{
    providerEsimId: string;
  }>;
};

export async function GET(
  _request: Request,
  context: RouteContext
) {
  try {
    const { providerEsimId: rawProviderEsimId } = await context.params;
    const providerEsimId = requireProviderEsimId(rawProviderEsimId);

    const profile = await runEsimServerOperation(
      async ({ user, provider }) => {
        await requireOwnedEsimProfile(user.id, providerEsimId);

        return provider.getEsim(providerEsimId);
      }
    );

    return createEsimApiSuccessResponse(profile);
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
