// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface NamespaceConfig {
  name: string;
}

export function isNamespaceConfig(v: any): v is NamespaceConfig {
  return (
    ((typeof v['name']) === 'string')
  );
}