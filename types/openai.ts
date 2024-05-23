import * as z from 'zod';

export enum OpenAIModelID {
  GPT_4o = 'gpt-4o',
  GPT_4_TURBO = 'gpt-4-turbo',
  GPT_4 = 'gpt-4',
}

export enum OpenAIModelType {
  CHAT = 'chat',
  COMPLETION = 'completion',
  EMDEDDING = 'embedding'
}

export const OpenAIModelSchema = z.object({
  id: z.nativeEnum(OpenAIModelID),
  azureDeploymentId: z.string().optional(),
  name: z.string(),
  maxLength: z.number(), // max length of a message.
  tokenLimit: z.number(),
  type: z.nativeEnum(OpenAIModelType).default(OpenAIModelType.CHAT)
});
export type OpenAIModel = z.infer<typeof OpenAIModelSchema>;

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4o;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4o]: {
    id: OpenAIModelID.GPT_4o,
    name: 'GPT_4o',
    maxLength: 500000,
    tokenLimit: 128000,
    type: OpenAIModelType.CHAT
  },
  [OpenAIModelID.GPT_4_TURBO]: {
    id: OpenAIModelID.GPT_4_TURBO,
    name: 'GPT_4_TURBO',
    maxLength: 500000,
    tokenLimit: 128000,
    type: OpenAIModelType.CHAT
  },
    [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 500000,
    tokenLimit: 8192,
    type: OpenAIModelType.CHAT
  },
};
