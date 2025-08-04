import {
  Suspense,
  lazy,
  useState,
  Component,
  type ReactNode,
  type JSX,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface ErrorBoundaryProps {
  children: ReactNode;
  lesson: string;
  student: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("課題読み込みエラー:", error, errorInfo);
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
          <h2>ファイルが見つかりません</h2>
          <p>
            パスを確認してください: lesson_{this.props.lesson}/homework/
            {this.props.student}/Solution.tsx
          </p>
          <div className="error-actions">
            <a href="/">帰る</a>
            <button onClick={this.handleRetry}>再試行</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function useUrlParams() {
  const url = new URLSearchParams(window.location.search);
  return {
    lesson: url.get("lesson"),
    student: url.get("student"),
  };
}

export default function App(): JSX.Element {
  const { lesson, student } = useUrlParams();

  if (lesson && student) {
    const Component = lazy(
      () => import(`../${lesson}/homework/${student}/Solution.tsx`),
    );

    return (
      <ErrorBoundary lesson={lesson} student={student}>
        <Suspense fallback={<div>読み込み中...</div>}>
          <Component />
        </Suspense>
      </ErrorBoundary>
    );
  }

  return <Stub />;
}

function Stub(): JSX.Element {
  const [student, setStudent] = useState<string>("");
  const [selectedLesson, setSelectedLesson] = useState<string>("lesson_1");

  const isValidStudentName = /^[a-zA-Z0-9-_]+$/.test(student);
  const canViewHomework = student.trim() && isValidStudentName;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React 課題</h1>

      <div className="instructions">
        <h3>セットアップ手順:</h3>
        <ol>
          <li>
            <code>
              mkdir -p {selectedLesson}/homework/{student || `[受講者名]`}
            </code>
          </li>
          <li>
            <code>
              cp {selectedLesson}/homework/template/Solution.tsx{" "}
              {selectedLesson}/homework/{student || `[受講者名]`}/Solution.tsx
            </code>
          </li>
          <li>
            <code>
              cd {selectedLesson}/homework/{student || `[受講者名]`}
            </code>
          </li>
          <li>
            <code>Solution.tsx</code>を編集してソリューションを実装
          </li>
          <li>
            下のフォームで名前を入力して「課題を見る」をクリック
            {student && (
              <>
                、または{" "}
                <code>
                  http://localhost:5173/?lesson={selectedLesson}&student=
                  {student}
                </code>{" "}
                を開いてください
              </>
            )}
          </li>
        </ol>
      </div>

      <form action="/" method="get" className="card">
        <select
          name="lesson"
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(e.target.value)}
          aria-label="lesson selection"
        >
          <option value="lesson_1">第1課</option>
          <option value="lesson_2">第2課</option>
          <option value="lesson_3">第3課</option>
        </select>
        <input
          type="text"
          name="student"
          placeholder="受講者名を入力"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
          pattern="[a-zA-Z0-9_-]+"
          title="英数字、アンダースコア、ハイフンのみ使用可能"
          required
          aria-label="student name input"
        />
        <button type="submit" disabled={!canViewHomework}>
          課題を見る
        </button>
      </form>

      <p className="hint">
        名前は英数字とハイフンのみ使用してください（例: kenpachi）
      </p>
    </>
  );
}
